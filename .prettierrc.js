module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.sol"],
      options: {
        printWidth: 120,
        semi: false,
        trailingComma: "es5",
      },
    },
  ],
}