module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "img-tarefas": "url('/images/todolist.jpg')"
      })
    },
  },
  plugins: [],
}
