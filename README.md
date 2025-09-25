# Caso 1: Bug en producción – solución urgente y mantenimiento simultáneo

## Actividades realizadas

### 1. Crear rama de hotfix
- Se creó la rama **hotfix/usuario-login** desde `main`.
- En esta rama se corrigió un error crítico en `login.js`.
- Se realizaron los commits correspondientes con el prefijo `fix`.

### 2. Crear rama de nueva funcionalidad
- Se creó la rama **feature/nueva-funcionalidad** desde `develop`.
- En esta rama se agregó validación de correo electrónico en el login.
- Se realizaron los commits con el prefijo `feat`.

### 3. Merge del hotfix en `main` y `develop`
- El hotfix fue integrado en la rama **main** para asegurar que la versión en producción tuviera la corrección.
- El mismo hotfix se integró en **develop** para mantener la consistencia entre ramas.

### 4. Resolución de conflictos
Durante la integración de la **feature/nueva-funcionalidad** en `develop`, surgió un conflicto en `login.js`.  
El archivo contenía dos cambios distintos:  
- El hotfix (control de usuario vacío).  
- La nueva funcionalidad (validación de email).  

Se resolvió combinando ambos cambios.
