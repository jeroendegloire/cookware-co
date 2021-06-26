export default {
    name: 'employeeInfo',
    type: 'object',
    title: 'Employee info',
    fields: [
        {
            name: 'employeeName',
            type: 'string',
            title: 'Employee name',
            validation: Rule => Rule.required()
        },
        {
            name: 'imployeeFunction',
            type: 'string',
            title: 'Employee function'
        }
    ],
}