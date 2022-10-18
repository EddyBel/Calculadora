class Calculator {
  constructor() {
    // Operaciones Basicas
    this.addition = (a, b) => parseFloat(a) + parseFloat(b);
    this.substraction = (a, b) => parseFloat(a) - parseFloat(b);
    this.multiplication = (a, b) => parseFloat(a) * parseFloat(b);
    this.division = (a, b) => parseFloat(a) / parseFloat(b);
    this.percentage = (a) => parseFloat(a) / 100;
  }
}
