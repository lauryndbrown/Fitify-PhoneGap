from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from fitify.models import Character

class CharacterResource(ModelResource):
    class Meta:
        queryset = Character.objects.all()
        resource_name = 'character'
        authorization = Authorization()
