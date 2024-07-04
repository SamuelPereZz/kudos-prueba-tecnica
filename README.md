# Kudos Software Factory

> [!IMPORTANT]
> Prueba tecnica

Aplicación Front End que permita a los usuarios autenticados, específicamente con rol de `admin`, cargar archivos CSV para la creación de registros en una base de datos. La aplicación debe recibir la respuesta y permitir la corrección de registros inválidos.

## Tecnologías Utilizadas

- React y Vite para construir la interfaz de usuario.
- React Router para gestionar las rutas.
- CSS tradicional y Emotion para el manejo de los estilos en los componentes.
- JSON Server para simular un servidor local y completar una mejor simulación.

## Simulación de Respuestas del Servidor

### Endpoints

- **Autenticación**: Simula la respuesta al endpoint `/api/login`:

    ```json
    {
        "ok": true,
        "data": {
            "email": "admin@mail.com",
            "name": "Mr. Admin",
            "role": "admin",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }
    }
    ```

- **Carga de Datos**: Simula la respuesta al endpoint `/api/upload`:

    ```json
    {
        "ok": true,
        "data": {
            "success": [
                {
                    "id": 1,
                    "name": "Juan Perez",
                    "email": "juan.perez@example.com",
                    "age": 28
                }
            ],
            "errors": [
                {
                    "row": 4,
                    "details": {
                        "name": "El campo 'name' no puede estar vacío.",
                        "email": "El formato del campo 'email' es inválido.",
                        "age": "El campo 'age' debe ser un número positivo."
                    }
                }
            ]
        }
    }
    ```

## Funcionalidades

- **Página de Login (`/login`)**: Formulario de ingreso de credenciales con validación.
- **Página de Carga de Archivos CSV (`/`)**: Acceso restringido a usuarios `admin`, formulario de carga y resumen de resultados.
- **Visualización y Corrección de Errores**: Edición y reenvío de registros con errores.

## Empezar Aplicación

Para instalar y ejecutar `kudos-prueba-tecnica` en tu máquina local, sigue estos sencillos pasos:

1. **Clonar el repositorio**:

  ```shell
  git clone git@github.com:SamuelPereZz/kudos-prueba-tecnica.git
  cd kudos-prueba-tecnica
  ```

2. **Instalar dependencias**:
   
  ```shell
  npm install
  ```

3. **Inicia la aplicación**:

```shell
npm run dev
```

4. ## **Iniciar el Servidor Local**: En una terminal separada, inicia el servidor JSON local
   
  ```shell
   json-server --watch db.json --port 5000
  ```
