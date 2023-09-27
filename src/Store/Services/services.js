export class TimeLine {
  static getProfessionals() {
    try {
      const professionalsData = JSON.parse(localStorage.getItem('professionals'));
      if (professionalsData) {
        return professionalsData;
      }
    } catch (e) {
      throw e;
    }
  }

  static getAvailable_hours() {
    try {
      const hoursData = JSON.parse(localStorage.getItem('hours'));
      if (hoursData) {
        return hoursData;
      }
    } catch (e) {
      throw e;
    }
  }

  static getServices() {
    try {
      const servicesData = JSON.parse(localStorage.getItem('services'));
      if (servicesData) {
        return servicesData;
      }
    } catch (e) {
      throw e;
    }
  }

}
