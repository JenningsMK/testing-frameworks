export const joi = 'const schema = Joi.object({\n' +
  '  givenName: Joi.string().required().min(2).messages({\n' +
  '    \'string.empty\': \'Whats you name?\',\n' +
  '    \'string.min\': \'Your name is too short, it must be at least {<!-- -->{#limit}} characters long\',\n' +
  '  }),\n' +
  '  familyName: Joi.string().required(),\n' +
  '  emailAddress: Joi.string().email(),\n' +
  '  phoneNumber: Joi.string().regex(/^[0-9]{10}$/).required(),\n' +
  '  cssColour: Joi.string().required(),\n' +
  '  frameworks: Joi.array().items(Joi.string()).required(),\n' +
  '});\n' +
  '\n' +
  'const { error, value } = schema.validate(formDetails.value);';

export const regie = 'const formDetails = ref({});\n' +
  '\n' +
  'const rules = computed(() => {\n' +
  '  return inferRules(formDetails, {\n' +
  '    givenName: {\n' +
  '      required: withMessage(required, \'Whats you name?\'),\n' +
  '      minLength: withMessage(minLength(2), \'Your name is too short, it must be at least 2 characters long\'),\n' +
  '    },\n' +
  '\n' +
  '    familyName: {\n' +
  '      required,\n' +
  '    }\n' +
  '  });\n' +
  '});\n' +
  '\n' +
  'const {r$} = useRegle(formDetails, rules);';

export const veeValidate = 'const schema = toTypedSchema({\n' +
  '  ...\n' +
  '});\n' +
  '\n' +
  'const {defineField, handleSubmit, errors} = useForm({validationSchema: schema});\n' +
  '\n' +
  'const [givenName, givenNameAttr] = defineField(\'givenName\');\n' +
  'const [familyName, familyNameAttr] = defineField(\'givenName\');\n' +
  'const [emailAddress, emailAddressAttr] = defineField(\'givenName\');\n' +
  'const [phoneNumber, phoneNumberAttr] = defineField(\'givenName\');\n' +
  'const [cssColour, cssColourAttr] = defineField(\'givenName\');\n' +
  'const [frameworks, frameworksAttr] = defineField(\'givenName\');\n' +
  '\n' +
  'const submit = handleSubmit(\n' +
  '  () => {/* Handle form submission */},\n' +
  '  () => {/* Handle invalid form submission */}\n' +
  ')';

export const vest = 'const suit = create(data = {}) => {\n' +
  '  test(\'name is required\', () => {\n' +
  '    enforce(data.name).message(\'Name is required\').isNotEmpty();\n' +
  '  });\n' +
  '});\n' +
  '\n' +
  'suite(formDetails.value);';

export const yup = 'const schema = {\n' +
  '  givenName: string().required(\'Name is required\').min(2, \'Name is too short\'),\n' +
  '  familName: string()\n' +
  '}\n' +
  '\n' +
  'await schema.validate(data, schema)';

export const zod = 'const schema = {\n' +
  '  givenName: z.string(\'Name is required\').min(2, \'Name is too short\'),\n' +
  '  familName: z.optional(z.string()),\n' +
  '}\n' +
  '\n' +
  'Data.parse(data);'
