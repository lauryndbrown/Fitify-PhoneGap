from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from fitify.models import Character
from django.contrib.auth.models import User
from tastypie import fields
class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        excludes = ['email', 'password', 'is_active', 'is_staff', 'is_superuser']
        allowed_methods = ['get']

class CharacterResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    class Meta:
        queryset = Character.objects.all()
        resource_name = 'character'
        authorization = Authorization()
