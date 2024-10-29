# Report TSX

![report-tsx](https://cogynngpmmcgfxiimtnc.supabase.co/storage/v1/object/public/images/portafolio/report-tsx.png?t=2024-10-21T14%3A20%3A25.634Z)


Este proyecto web consiste en un componente interactivo que permite generar e imprimir documentos en formatos comunes como tickets, facturas, órdenes de compra, entre otros. La funcionalidad clave es un botón que, al ser presionado, envía el contenido del componente visualizado a la impresora del usuario, optimizado para garantizar que el formato del documento sea adecuado para la impresión, sin perder detalles esenciales.


El componente soporta múltiples tipos de documentos, ajustándose dinámicamente para cada formato, lo que lo hace ideal para negocios que manejan diferentes tipos de reportes y documentos administrativos. El sistema está diseñado para ser altamente personalizable, permitiendo configurar detalles como logos, información de la empresa y el formato del documento.


Principales características:
  * Botón de impresión funcional para cualquier documento mostrado en pantalla.
  * Soporte para formatos de reportes como tickets, facturas, órdenes de compra, entre otros.
  * Interfaz intuitiva y fácil de usar, con personalización de datos clave.
  * Compatible con impresoras estándar.
  * Esta descripción puede adaptarse según los detalles más específicos del proyecto o el público objetivo.


### Instalación
```batch
npm i report-tsx
```


### Ejemplos: 
[ticket de venta](./doc/ticket_de_venta.md)


### Componentes
Existe varios componentes para generar todo tipo de reportes adicional puedes incluir tus propios componentes, por ahora vamos a ver como se utilizan los componente que vienen integrado.
Estructura básica de un componente:

```json
{
    "type":"component",
    "props":{}, //props components
    "styles":{} // styles
}
```

| Propiedad | Tipo                                  | Requerido |
| --------- | ------------------------------------- | --------- |
| type      | [MapNameComponent](#MapNameComponent) | ✅         |
| props     | `Record<string, any>`                 | ✅         |
| styles    | `Record<string, CSSProperties>`       | ✅         |



> Las propiedades props y styles depende de que componente se selecciones.

### MapNameComponent
Es un `map` que contiene todos los nombres posible para los componentes que se puede utilizar en un reporte en `report-tsx`


### Contenedor o `container`
El componente `container` es un componente muy **importante** ya que se necesita para poder mostrar los demás componentes como textos, imágenes, tablas, etc. Ejemplo: [ticket de venta](./doc/ticket_de_venta.md)
La propiedad `props.nodes` recibe el nombre de los componentes como hijos


| Propiedad        | Tipo                            | Requerido |
| ---------------- | ------------------------------- | --------- |
| props.nodes       | `string[]`                        | ✅         |
| props.data       | `Record<string, any>`           | ❌         |
| styles.container | `Record<string, CSSProperties>` | ❌         |


```json
{
    "type":"rich-text",
    "props":{
        "text":"Hello ${world}",
        "data":{
            "world":"planet"
        }
    },
    "styles":{
        "container":{},
        "styles":{}
    }
}

```
### Texto o `rich-text`


| Propiedad        | Tipo                            | Requerido |
| ---------------- | ------------------------------- | --------- |
| props.text       | `string`                        | ✅         |
| props.data       | `Record<string, any>`           | ❌         |
| styles.container | `Record<string, CSSProperties>` | ❌         |
| styles.text      | `Record<string, CSSProperties>` | ❌         |


```json
{
    "type":"rich-text",
    "props":{
        "text":"Hello ${world}",
        "data":{
            "world":"planet"
        }
    },
    "styles":{
        "container":{},
        "styles":{}
    }
}

```

### Imagen o `image`


| Propiedad        | Tipo                            | Requerido |
| ---------------- | ------------------------------- | --------- |
| props.src        | `string`                        | ✅         |
| props.alt        | `string`                        | ❌         |
| props.width      | `string`\|`number`              | ✅         |
| props.height     | `string`\|`number`              | ✅         |
| props.data       | `Record<string, any>`           | ❌         |
| styles.container | `Record<string, CSSProperties>` | ❌         |
| styles.image     | `Record<string, CSSProperties>` | ❌         |


```json
{
    "type":"rich-text",
    "props":{
        "text":"Hello ${world}",
        "data":{
            "world":"planet"
        }
    },
    "styles":{
        "container":{},
        "styles":{}
    }
}

```


![buy_me_coff](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=%E2%98%95&slug=foliacos&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)