/**
 * Retorna variable por modulo
 */
export const mensajes = {
  pastor: {
    names: 'Nombres',
    lastNames: 'Apellidos',
    documentNumber: 'Número de documento',
    documentType: 'Tipo de documento',
    show: {
      title: 'Listado de Pastores',
      search: 'Buscar...',
      addPastor: 'Agregar pastor',
      back: 'Volver',
      noResults: 'No hay pastores registrados'
    },
    create: {
      title: 'Agregar Pastor',
      create: 'Agregar',
      cancel: 'Cerrar',
      errors: {
        requiredField: 'Este campo es obligatorio',
        invalidDocNumber: 'Número de identificación incorrecto',
      },
      successful: 'Pastor agregado exitosamente',
      unsuccessful: 'Hubo un problema al agregar por favor intente de nuevo',
    }
  },
  church: {
    name: 'Nombre',
    address: 'Dirección',
    show: {
      title: 'Listado de Iglesias',
      search: 'Buscar...',
      addChurch: 'Agregar iglesia',
      back: 'Volver',
      noResults: 'No hay iglesias resgistradas',
    },
    create: {
      title: 'Agregar Iglesia',
      add: 'Agregar',
      cancel: 'Cerrar',
      errors: {
        requiredField: 'Este campo es obligatorio',
      },
      successful: 'Igelsias agregada exitosamente',
      unsuccessful: 'Hubo un problema al agregar por favor intente de nuevo',
    }
  },
  contrayente: {
    names: 'Nombres',
    lastNames: 'Apellidos',
    documentNumber: 'Número de documento',
    documentType: 'Tipo de documento',
    civilRegNumber: 'Número de registro civil',
    notaria: 'Notaría/Registraduría',
    create: {
      title: 'Agregar Contrayente',
      create: 'Agregar',
      cancel: 'Cerrar',
      errors: {
        requiredField: 'Este campo es obligatorio',
        invalidDocNumber: 'Número de identificación incorrecto',
        invalidCRN: 'Número de regstro civil incorrecto',
      },
      successful: 'Contrayente exitosamente agregado',
      unsuccessful: 'El contrayente no se pudo agregar debido a un error'
    }
  }
};
