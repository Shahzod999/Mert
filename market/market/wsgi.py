import os
import sys
#
## assuming your django settings file is at '/home/Shahzod999/mysite/mysite/settings.py'
## and your manage.py is is at '/home/Shahzod999/mysite/manage.py'
path = '/home/Shahzod999/Mert/market'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'market.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

from dotenv import load_dotenv # load_dotenv для загрузки переменных окружения 
project_folder = os.path.expanduser('/home/Shahzod999/Mert/market/market')  # adjust as appropriate
load_dotenv(os.path.join(project_folder, '.env'))
