import sys, os, io, urllib.request, urllib.parse
from PIL import Image
from rembg import remove, new_session
CDN='https://cdn.shopify.com/s/files/1/0828/2639/5866/files/'
sess=new_session(os.environ.get('MODEL','isnet-general-use'))
os.makedirs('cutouts',exist_ok=True); os.makedirs('photos',exist_ok=True)
for name in open('tools/cutouts.txt').read().split():
    base=os.path.splitext(name)[0]
    out=f'cutouts/{base}.webp'
    if os.path.exists(out): continue
    url=CDN+urllib.parse.quote(name)+'?width=1400'
    try:
        data=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=60).read()
    except Exception as e:
        print('FAIL',name,e); continue
    im=Image.open(io.BytesIO(data)).convert('RGB')
    cut=remove(im,session=sess,post_process_mask=True)
    bb=cut.getbbox()
    if bb: cut=cut.crop(bb)
    cut.thumbnail((1200,1600))
    cut.save(out,'WEBP',quality=86,method=6)
    print('ok',name,cut.size,os.path.getsize(out))
