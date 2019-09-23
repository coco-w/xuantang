import Mock from 'mockjs'

export const getRegisterFormData = () => {
  const tableData = [{
    "index": "1",
    "entry": "姓名",
    "type": "input",
    "required": "是",
    "operation": false,
    "remarks": "",
    "value": "",
    "model": `input_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`,
  }, {
    "index": "2",
    "entry": "单位",
    "type": "input",
    "remarks": "",
    "required": true,
    "operation": false,
    "value": "",
    "model": `input_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`
  }, {
    "index": "3",
    "entry": "邮箱",
    "type": "input",
    "remarks": "",
    "model": `input_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`,
    "value": "",
    "required": true,
    "operation": true
  }, {
    "index": "4",
    "entry": "入住酒店",
    "type": "input",
    "value": "",
    "model": `input_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`,
    "required": true,
    "remarks": "",
    "operation": true
  }, {
    "type": "radio-group",
    "selectType": "1",
    "value": "",
    "entry": "大声道",
    "model": `radio-group_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`,
    "required": true,
    "operation": true,
    "remarks": "",
    "options": [{
      "value": "爱上大早上",
      "disabled": false,
      "tag": "radio",
    }, {
      "value": "注册",
      "tag": "radio",
      "disabled": false
    }],
    "index": 5
  }, {
    "type": "checkbox-group",
    "selectType": "1",
    "entry": "撒打算写",
    "value": [],
    "required": true,
    "operation": true,
    "remarks": "",
    "model": `checkbox-group_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`,
    "options": [{
      "value": "这些菜单",
      "tag": "checkbox",
      "disabled": false
    }, {
      "value": "的撒大 ",
      "tag": "checkbox",
      "disabled": false
    }, {
      "value": "仔细擦拭打完",
      "tag": "checkbox",
      "disabled": false
    }],
    "index": 6
  }, {
    "type": "date-picker",
    "selectType": "1",
    "entry": "大多在现场",
    "required": false,
    "value": "",
    "model": `date-picker_${(new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)}`,

    "operation": true,
    "remarks": "",
    "options": [{
      "value": "",
      
      "disabled": false
    }, {
      "value": "",
      "disabled": false
    }],
    "index": 7
  }]
  return Mock.mock(tableData)
}