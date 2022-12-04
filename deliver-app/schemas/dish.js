export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type:"string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
     },
     {
      name: "short_description",
      type:"string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
     },
     {
      name: "image",
      type:"image",
      title: "Image of the dish",
     },
     
     {
      name: "price",
      type:"number",
      title: "Price of the dish in TND",
      validation: (Rule)=>Rule.min(0).required(),
     },
     ],

}
