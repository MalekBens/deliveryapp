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
      name: "short_desscription",
      type:"string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
     },
     {
      name: "image",
      type:"image",
      title: "Image of the Restaurant",
     },
     ],

}
