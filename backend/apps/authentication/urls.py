from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithUsernameView

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithUsernameView.as_view(),
         name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(),
         name='token_verify'),
]