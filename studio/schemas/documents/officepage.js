import homeScreen from '../objects/homeScreen'

export default {
    name: 'office',
    type: 'document',
    title: 'Office',
    fields: [
        {
            name: 'officeName',
            type: 'string',
            title: 'Office name and location'
        },
        {
            name: 'employeeInfoArray',
            type: 'array',
            title: 'Eployee info array',
            of: [{
                type: 'employeeInfo'
            }]
        },
        {
            name: 'officeInfoArray',
            type: 'array',
            title: 'Office info array',
            of: [{
                type: 'officeInfo'
            }]
        }
    ],
}