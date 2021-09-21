/*
 * ============================
 * File: index.js
 * Project: Octavia-Admin
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://ui-lib.com/
 * -----
 * Last Modified: Saturday, 18th April 2020 9:32:52 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2021 UILIB, UILIB
 * ============================
 */

// Imports
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import authenticate from '@/auth/authenticate';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/app/Index'),
      beforeEnter: authenticate,
      redirect: '/app/dashboard/home',

      children: [
        {
          path: '/app/dashboard',
          component: () => import('@/views/app/dashboard/Index'),

          children: [
            {
              path: 'home',
              name: 'home',
              component: () =>
                import('@/views/app/dashboard/Inicio'),
              meta: {
                breadcrumb: [
                  { name: 'Dashboard' },
                  { name: 'Inicio' },
                ],
              },
            },
          ],
        },
        {
          path: '/app/configuracion',
          component: () => import('@/views/app/configuracion/Index'),

          children: [
            {
              path: 'setting',
              name: 'setting',
              meta: {
                breadcrumb: [{ name: 'Configuracion' },{ name: 'setting' }],
              },
                 component: () =>import('@/views/app/configuracion/Setting'),
            },
          ],
        },
        {
          path: '/app/servicios',
          component: () => import('@/views/app/servicios/BaseTable'),
          children: [
            {
              path: 'cliente',
              name: 'cliente',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'Cliente' }],
              },
              component: () => import('@/views/app/servicios/Cliente'),
            },
            {
              path: 'contacto',
              name: 'contacto',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'Contacto' }],
              },
              component: () => import('@/views/app/servicios/Contacto'),
            },
            {
              path: 'vendedor',
              name: 'vendedor',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'Vendedor' }],
              },
              component: () => import('@/views/app/servicios/Vendedor'),
            },
            {
              path: 'listaprecio',
              name: 'listaprecio',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'listaprecio' }],
              },
              component: () => import('@/views/app/servicios/ListaPrecio'),
            },
            {
              path: 'usuarios',
              name: 'usuarios',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'Usuarios' }],
              },
              component: () => import('@/views/app/servicios/Usuarios'),
            },
            {
              path: 'cotizacion',
              name: 'cotizacion',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'Cotizacion' }],
              },
              component: () => import('@/views/app/servicios/Cotizacion'),
            },
            {
              path: 'pedidos',
              name: 'pedidos',
              meta: {
                breadcrumb: [{ name: 'Servicios' }, { name: 'Pedidos' }],
              },
              component: () => import('@/views/app/servicios/Pedidos'),
            },
          ],
        },
        {
          path: '/app/ecommerce',
          component: () => import('@/views/app/ecommerce/Ecommerce'),
          children: [
            {
              path: 'ecommerce-product-list',
              name: 'ecommerce-product-list',
              meta: {
                breadcrumb: [{ name: 'Ecommerce' }, { name: 'Product List' }],
              },
              component: () =>
                import('@/views/app/ecommerce/EcommerceProductList'),
            },
            {
              path: 'ecommerce-product-details',
              name: 'ecommerce-product-details',
              meta: {
                breadcrumb: [
                  { name: 'Ecommerce' },
                  { name: 'Product Details' },
                ],
              },
              component: () =>
                import('@/views/app/ecommerce/EcommerceProductDetails'),
            },
            {
              path: 'ecommerce-product-checkout',
              name: 'ecommerce-product-checkout',
              meta: {
                breadcrumb: [
                  { name: 'Ecommerce' },
                  { name: 'Product Checkout' },
                ],
              },
              component: () =>
                import('@/views/app/ecommerce/EcommerceProductCheckout'),
            },
          ],
        },

    
   
        {
          path: '/app/uiKits',
          component: () => import('@/views/app/uiKits/Index'),
          children: [
            {
              path: 'button',
              name: 'button',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'Button' }],
              },
              component: () => import('@/views/app/uiKits/Button'),
            },
            {
              path: 'avatar',
              name: 'avatar',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'Avatar' }],
              },
              component: () => import('@/views/app/uiKits/Avatar'),
            },
            {
              path: 'alerts',
              name: 'alerts',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'alerts' }],
              },
              component: () => import('@/views/app/uiKits/Alerts'),
            },
            {
              path: 'accordion',
              name: 'accordion',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'accordion' }],
              },
              component: () => import('@/views/app/uiKits/Accordion'),
            },
            {
              path: 'badge',
              name: 'badge',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'badge' }],
              },
              component: () => import('@/views/app/uiKits/Badge'),
            },
            {
              path: 'chips',
              name: 'chips',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'chips' }],
              },
              component: () => import('@/views/app/uiKits/Chips'),
            },
            {
              path: 'snackbar',
              name: 'snackbar',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'snackbar' }],
              },
              component: () => import('@/views/app/uiKits/Snackbar'),
            },
            {
              path: 'sparklines',
              name: 'sparklines',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'sparklines' }],
              },
              component: () => import('@/views/app/uiKits/Sparklines'),
            },
            {
              path: 'stepper',
              name: 'stepper',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'stepper' }],
              },
              component: () => import('@/views/app/uiKits/Stepper'),
            },
            {
              path: 'tooltip',
              name: 'tooltip',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'tooltip' }],
              },
              component: () => import('@/views/app/uiKits/ToolTip'),
            },
            {
              path: 'treeview',
              name: 'treeview',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'treeview' }],
              },
              component: () => import('@/views/app/uiKits/TreeView'),
            },
            {
              path: 'fileInputs',
              name: 'fileInputs',
              meta: {
                breadcrumb: [{ name: 'UiKits' }, { name: 'fileInputs' }],
              },
              component: () => import('@/views/app/uiKits/FileInputs'),
            },
          ],
        },
        {
          path: '/app/extraUiKits',
          component: () => import('@/views/app/extraUiKits/Index'),
          children: [
            {
              path: 'cards',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'cards' }],
              },
              component: () => import('@/views/app/extraUiKits/Cards'),
            },
            {
              path: 'bottom-navigation',
              meta: {
                breadcrumb: [
                  { name: 'Extra UiKits' },
                  { name: 'Bottom Navigation' },
                ],
              },
              component: () =>
                import('@/views/app/extraUiKits/BottomNavigation'),
            },
            {
              path: 'bottom-sheets',
              meta: {
                breadcrumb: [
                  { name: 'Extra UiKits' },
                  { name: 'Bottom Sheets' },
                ],
              },
              component: () => import('@/views/app/extraUiKits/BottomSheets'),
            },
            {
              path: 'calendars',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'calendars' }],
              },
              component: () => import('@/views/app/extraUiKits/Calendars'),
            },

            {
              path: 'list',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'list' }],
              },
              component: () => import('@/views/app/extraUiKits/List'),
            },
            {
              path: 'paginations',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'paginations' }],
              },
              component: () => import('@/views/app/extraUiKits/Paginations'),
            },

            {
              path: 'Circular',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'Circular' }],
              },
              component: () => import('@/views/app/extraUiKits/Circular'),
            },
            {
              path: 'Linear',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'Linear' }],
              },
              component: () => import('@/views/app/extraUiKits/Linear'),
            },
            {
              path: 'ratings',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'ratings' }],
              },
              component: () => import('@/views/app/extraUiKits/Ratings'), // dashboard
            },
            {
              path: 'tabs',
              meta: {
                breadcrumb: [{ name: 'Extra UiKits' }, { name: 'tabs' }],
              },
              component: () => import('@/views/app/extraUiKits/Tabs'), // dashboard
            },
          ],
        },
        {
          path: '/app/forms',
          component: () => import('@/views/app/forms/Index'),
          children: [
            {
              path: 'validation',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'validation' }],
              },
              component: () => import('@/views/app/forms/Validation'),
            },
            {
              path: 'inputs',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'inputs' }],
              },
              component: () => import('@/views/app/forms/Inputs'),
            },
            {
              path: 'overflow-buttons',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'overflow buttons' }],
              },
              component: () => import('@/views/app/forms/OverflowButtons'),
            },
            {
              path: 'selects',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'selects' }],
              },
              component: () => import('@/views/app/forms/Selects'),
            },
            {
              path: 'combobox',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'combobox' }],
              },
              component: () => import('@/views/app/forms/ComboBox'),
            },
            {
              path: 'selection-controls',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'selection-controls' }],
              },
              component: () => import('@/views/app/forms/SelectionControls'),
            },
            {
              path: 'sliders',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'sliders' }],
              },
              component: () => import('@/views/app/forms/Sliders'),
            },
            {
              path: 'textarea',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'textarea' }],
              },
              component: () => import('@/views/app/forms/Textarea'),
            },
            {
              path: 'textfields',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'textfields' }],
              },
              component: () => import('@/views/app/forms/TextFields'),
            },
            ,
            {
              path: 'timepicker',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'timepicker' }],
              },
              component: () => import('@/views/app/forms/TimePicker'),
            },
            ,
            {
              path: 'datepicker',
              meta: {
                breadcrumb: [{ name: 'Forms' }, { name: 'datepicker' }],
              },
              component: () => import('@/views/app/forms/DatePicker'),
            },
          ],
        },
      ],
    },
    {
      path: '/app/sessions',
      component: () => import('@/views/app/sessions/Sessions'),

      children: [
        {
          path: 'sign-in',
          component: () => import('@/views/app/sessions/SignIn'),
        },
        {
          path: 'error',
          component: () => import('@/views/app/sessions/Error'),
        },
        {
          path: 'forgot',
          component: () => import('@/views/app/sessions/Forgot'),
        },
        {
          path: 'lockscreen',
          component: () => import('@/views/app/sessions/Lockscreen'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/app/sessions/Login'),
        },
        {
          path: 'sign-in-three',
          component: () => import('@/views/app/sessions/SignInThree'),
        },
        {
          path: 'sign-in-four',
          component: () => import('@/views/app/sessions/SignInFour'),
        },
        {
          path: 'sign-in-five',
          component: () => import('@/views/app/sessions/SignInFive'),
        },
        {
          path: 'sign-up',
          component: () => import('@/views/app/sessions/SignUp'),
        },
        {
          path: 'sign-up-2',
          name: 'signup',
          component: () => import('@/views/app/sessions/SignUpTwo'),
        },
        {
          path: 'sign-up-5',
          component: () => import('@/views/app/sessions/SignUpFive'),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.
    store.dispatch('changeThemeLoadingState', true);
  }
  next();
});

router.afterEach(() => {

  // Complete the animation of the route progress bar.
  // setTimeout(() => store.dispatch('changeThemeLoadingState', false), 500);
   store.dispatch('changeThemeLoadingState', false);

});

export default router;
