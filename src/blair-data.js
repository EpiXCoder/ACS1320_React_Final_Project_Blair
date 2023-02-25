import data from './blair-data.json'

data.forEach((obj, i) => {
	obj.id = i
})
console.log(data)

export default data