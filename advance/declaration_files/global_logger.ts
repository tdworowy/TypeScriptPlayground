class GlobalLogger {
  static logGlobalTOCOnsole() {
    for (let contact of CONTACT_DATA) {
      console.log(`Email: ${contact.Email}`);
      console.log(`Info: ${contact.DisplayText}`);
    }
  }
}
window.onload = () => {
  GlobalLogger.logGlobalTOCOnsole();
};
