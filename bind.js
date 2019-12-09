const person = {
    name: 'Nikolay'
}

function info(phone,email) {
    console.log(`Name: ${this.name}, Phone:${phone}, Email: $(email)`)
}

//Demo
//info.bind(person)('12345', 'n@gmail.com')
//info.bind(person, '12345')('n@gmail.com')
//info.bind(person, '12345','n@gmail.com')()

//1. Easy way
//function bind(fn, context, ...rest) {
//   returm fn.bind(context, ...rest)
// }

// 2. Withount inner methods: bind, call, apply
//function bind(fn, context, ...rest) {
//    return function(...args) {
//        const uniqId = Date.now().toString() 
//
//        context[uniqId] = fn
//
//        const result = context[uniqId](...rest.concat(args))
//
//       delete context[uniqId]
//        
//        return result
//
//    }
// }

// 3. ES5
//function bind(fn, context, ) {
//    const rest = Array.prototype.slice.call(arguments, argArray:2)
//    return function() {
//        const args = Array.prototype.slice.call(arguments)
//        return fn.apply(context, rest.concat(args)) //return fn.call(context) 
//
//    }
// }

// 4. ES6 +
// function bind(fn, context, ...rest) {
//    return function(...args) {
//        return fn.apply(context, rest.concat(args))
//        return fn.call(context, ...rest.concat(args))
//    }
// }

// bind(info, person) ('12345', 'n@gmail.com')
// bind(info, person, rest:'12345',)('n@gmail.com')
// bind(info, person, rest:'12345','n@gmail.com')()

// Call 
function call(fn, context, ...args) {
    const uniqId = Date.now().toString() 

    context[uniqId] = fn

    const result = context[uniqId](...args)

    delete context[uniqId]

    return result

}

// call(info, person, args: '1234', 'n@gmail.com')

// Apply
function apply(fn, context, args) {
    const uniqId = Date.now().toString() 

    context[uniqId] = fn

    const result = context[uniqId](...args)

    delete context[uniqId]

    return result

}

call(info, person, args: ['1234', 'n@gmail.com'])