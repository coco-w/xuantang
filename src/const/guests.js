export const guestsFormOptions = [
  {
    prop: 'name',
    placeholder: '请输入姓名',
    icon: '',
    value: '',
    required: true,
  },
  {
    prop: 'work',
    placeholder: '请输入工作单位',
    icon: '',
    value: '',
    required: true,
  },
  {
    prop: 'email',
    placeholder: '请输入邮箱地址',
    icon: '',
    value: '',
    required: false,
  },
  {
    prop: 'phoneNumber',
    placeholder: '请输入手机号码',
    icon: '',
    value: '',
    required: false,
  },{
    prop: 'major',
    placeholder: '请输入专业领域',
    icon: '',
    value: '',
    required: false,
  }
]
export const guestsForm = {
  name: '',
  work: '',
  email: '',
  phoneNumber: '',
  major: '',
}
export const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  work: [
    { required: true, message: '请输入工作单位', trigger: 'blur' },
  ],
  email: [
    {type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur'}
  ],
  phoneNumber: [
    {validator: (rule, value, callback) => {
      if (value.trim().length === 0) {
        callback()
      } else if (/^[1][0-9]{10}$/.test(value)) {
        callback();
      } else {
        callback('请输入正确的手机号码');
      }
    }}
  ]
}