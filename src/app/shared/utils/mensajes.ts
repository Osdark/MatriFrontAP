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
    title: 'Listado de Iglesias',
    distritoName: 'Distrito',
    name: 'Nombre',
    type: 'Tipo',
    search: 'Buscar...',
    back: 'Volver',
    noResults: 'No hay iglesias resgistradas',
  },
  contrayente: {
    novio: 'Novio',
    novia: 'Novia',
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
  },
  matrimonio: {
    show: {
      title: 'Lista de Matrimonios',
      noResults: 'No hay Matrimonios Registrados',
      contrayente: 'Contrayente',
      church: 'Iglesia',
      pastor: 'Pastor',
      date: 'Fecha',
      regNumber: 'Número de registro',
      notaria: 'Notaría/Registraduría',
      actaNumber: 'Número de acta',
      search: 'Buscar...',
    },
    create: {
      title: 'Registrar Matrimonio',
      contrayente: 'Contrayentes',
      cont1: 'Primer Contrayente',
      cont2: 'Segundo Contrayente',
      marriageData: 'Información',
      district: 'Distrito',
      church: 'Iglesia',
      pastor: 'Pastor',
      actaNumber: 'Número de acta',
      date: 'Fecha',
      regNumber: 'Número de registro',
      notaria: 'Notaría/Registraduría',
      nextStep: 'Guardar y Continuar',
      prevStep: 'Atrás',
      save: 'Registrar',
      errors: {
        requiredField: 'Este campo es obligatorio',
        invalidRegNumber: 'El Número de registro es incorrecto'
      }
    },
  },
};
