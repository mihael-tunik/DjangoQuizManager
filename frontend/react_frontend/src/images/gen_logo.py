from html2image import Html2Image

hti = Html2Image()

hti.load_file('logo.html')
hti.load_file('logo_style.css')

hti.screenshot_loaded_file('logo.html', 'logo.png', size=(512, 512))
