export const getTypeColor = (type) => {
    if(type === "missed") return "#EEB7C2"
    if(type === "answered") return "#E9FAF9"
   if(type === "voicemail")   return "#4F46F8"

   return "black"
}