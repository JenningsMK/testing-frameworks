interface FrameworkCapability {
  type: 'Schema' | 'Library';
  onChangeValidation: boolean;
  treeShakeable: boolean;
  documentation: Documentation;
}

enum Documentation {
  bad = 'Not easy to use',
  good = 'Easy to use',
  excellent = 'Easy to use and well documented'
}

export const frameworkCapabilities = {
  joi: {
    type: 'Schema',
    onChangeValidation: false,
    treeShakeable: false,
    documentation: Documentation.bad,
  },
  regie: {
    type: 'Library',
    onChangeValidation: true,
    treeShakeable: true,
    documentation: Documentation.excellent,
  },
  veeValidate: {
    type: 'Library',
    onChangeValidation: true,
    treeShakeable: true,
    documentation: Documentation.bad,
  },
  vest: {
    type: 'Library',
    onChangeValidation: false,
    treeShakeable: true,
    documentation: Documentation.good,
  },
  yup: {
    type: 'Schema',
    onChangeValidation: false,
    treeShakeable: true,
    documentation: Documentation.good,
  },
  zod: {
    type: 'Schema',
    onChangeValidation: false,
    treeShakeable: true,
    documentation: Documentation.good,
  }
}
