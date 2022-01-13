from django.urls import include, path
from . import views
#  from django.conf.urls import urls
from rest_framework.routers import DefaultRouter
from angels_app.views import CartViewSet, ProductViewSet, CustomUserViewSet, SignupViewSet, current_user, LoginViewSet
from angels_app.products import patch1, patch2, patch3
from rest_framework import urlpatterns
router = DefaultRouter() 
#  router.register(r"admin", AdminViewSet, basename='admin')
router.register(r"cart", CartViewSet, basename='cart')
router.register(r"products", ProductViewSet, basename='products')
#  router.register(r"login", LoginViewSet, basename='login')
#  router.register(r'signup', SignupViewSet, basename='signup')
router.register(r'users', CustomUserViewSet, basename='user')
user_details = CustomUserViewSet.as_view({'get': 'retrieve'})

#  router.register(r'user_details', user_details, basename='user_details')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls'), name='signup'),
    path('get_email/', views.user_api),
    #  url(r'^user',views.userApi),
    #  path('login/', include('rest-auth/login/'), name='login'),
    #  path('logout/', include('api-auth/logout'), name='logout'),
    #  path('<int:CustomUser>/cart', CustomUserViewSet.as_view, name='customuser'),
    path('api-auth/', include('rest_framework.urls')),
    #  path('current_user/', current_user),
    #  path('users/', UserList.as_view()),
]
  
#  urlpatterns = [
    #  path('auth/', include('rest_auth.urls')),
    #  url(r'^api/products$', views.product_name),
    #  url(r'^api/products/price$', views.product_price),
    #  url(r'^api/products/details$', views.product_description),
    #  path(r"cart", ProductViewSet, basename='cart'),
    
    #  path('products', Products.as_view(), name='products')
    #  path('user-id/', UserIDView.as_view(), name='user-id'),
    #  path('countries/', CountryListView.as_view(), name='country-list'),
    #  path('addresses/', AddressListView.as_view(), name='address-list'),
    #  path('addresses/create/', AddressCreateView.as_view(), name='address-create'),
    #  path('addresses/<pk>/update/',
         #  AddressUpdateView.as_view(), name='address-update'),
    #  path('addresses/<pk>/delete/',
         #  AddressDeleteView.as_view(), name='address-delete'),
    #  path('products/', ItemListView.as_view(), name='product-list'),
    #  path('products/<pk>/', ItemDetailView.as_view(), name='product-detail'),
    #  path('add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),
    #  path('order-summary/', OrderDetailView.as_view(), name='order-summary'),
    #  path('checkout/', PaymentView.as_view(), name='checkout'),
    #  path('add-coupon/', AddCouponView.as_view(), name='add-coupon'),
    #  path('order-items/<pk>/delete/',
         #  OrderItemDeleteView.as_view(), name='order-item-delete'),
    #  path('order-item/update-quantity/',
         #  OrderQuantityUpdateView.as_view(), name='order-item-update-quantity'),
    #  path('payments/', PaymentListView.as_view(), name='payment-list'),
#  ]
