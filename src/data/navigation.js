export const items = [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    group: "dashboard",
    children: [
      {
        title: "Inicio",
        icon: "mdi-home-switch-outline",
        to: "home"
      }
    ]
  },
  {
    title: "Configuración",
    icon: "mdi-cog-outline",
    group: "configuracion",
    children: [
      {
        title: "Configuracion General",
        icon: "mdi-cog-box",
        to: "setting"
      }
    ]
  },
  {
    title: "Articulos",
    icon: "mdi-cart",
    group: "ecommerce",
    children: [
      {
        title: "Lista de Articulos",
        icon: "mdi-circle-medium",
        to: "ecommerce-product-list"
      },
      {
        title: "Detalles Articulo",
        icon: "mdi-circle-medium",
        to: "ecommerce-product-details"
      },
      {
        title: "Verificar Articulos",
        icon: "mdi-circle-medium",
        to: "ecommerce-product-checkout"
      }
    ]
  },
  {
    title: "Servicios",
    icon: "mdi-home-city",
    group: "servicios",
    children: [
      {
        title: "Clientes",
        icon: "mdi-human-capacity-decrease",
        to: "cliente"
      },
      {
        title: "Contactos",
        icon: "mdi-phone-message",
        to: "contacto"
      },
      {
        title: "Vendedores",
        icon: "mdi-file-edit",
        to: "vendedor"
      },
      {
        title: "Lista de Precios",
        icon: "mdi-notebook",
        to: "listaprecio"
      },
      {
        title: "Usuarios",
        icon: "mdi-account-group-outline",
        to: "usuarios"
      },
      {
        title: "Cotización",
        icon: "mdi-order-bool-ascending",
        to: "cotizacion"
      },
      {
        title: "Pedidos",
        icon: "mdi-book-play-outline",
        to: "pedidos"
      },
    ]
  },

];
