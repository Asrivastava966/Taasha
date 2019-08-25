"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PatientInfo {
    getFirstName() {
        return this.firstName;
    }
    setFirstName(value) {
        this.firstName = value;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(value) {
        this.lastName = value;
    }
    getMI() {
        return this.mi;
    }
    setMI(value) {
        this.mi = value;
    }
    getBirthDate() {
        return this.birthDate;
    }
    setBirthDate(date) {
        this.birthDate = date;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getBranchOffice() {
        return this.branchOffice;
    }
    setBranchOffice(value) {
        this.branchOffice = value;
    }
    getLegacyId() {
        return this.legacyId;
    }
    setLegacyId(value) {
        this.legacyId = value;
    }
    getCustom() {
        return this.custom;
    }
    setCustom(value) {
        this.custom = value;
    }
    getEmail() {
        return this.email;
    }
    setEmail(value) {
        this.email = value;
    }
    //Billing Address 
    getAddressOne() {
        return this.addressOne;
    }
    setAddressOne(address) {
        this.addressOne = address;
    }
    getAddressTwo() {
        return this.addressTwo;
    }
    setAddressTwo(address) {
        this.addressTwo = address;
    }
    getCity() {
        return this.city;
    }
    setCity(cityName) {
        this.city = cityName;
    }
    getState() {
        return this.state;
    }
    setState(stateName) {
        this.state = stateName;
    }
    getZipCode() {
        return this.zipCode;
    }
    setZipCode(zipCode) {
        this.zipCode = zipCode;
    }
    getTimeZone() {
        return this.timeZone;
    }
    setTimeZone(timeZone) {
        this.timeZone = timeZone;
    }
    //Delivery Address 
    getCommonAddressCheckboxValue() {
        return this.commonAddressCheckbox;
    }
    setCommonAddressCheckbox(commonAddressCheckboxValue) {
        this.commonAddressCheckbox = commonAddressCheckboxValue;
    }
}
exports.PatientInfo = PatientInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudEluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2RhdGEvaW5mby9QYXRpZW50SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQWEsV0FBVztJQXVCaEIsWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVNLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFUSxXQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLEtBQUs7UUFDYixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFUSxZQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQVU7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVJLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUFjO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFUSxTQUFTO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQXFCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFUSxlQUFlO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRU0sZUFBZSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxrQkFBa0I7SUFDWCxhQUFhO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRU0sYUFBYSxDQUFDLE9BQWM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVNLGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxhQUFhLENBQUMsT0FBYztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRU0sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRU0sT0FBTyxDQUFDLFFBQWU7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVNLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxTQUFnQjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU0sVUFBVTtRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFjO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxXQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQWU7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELG1CQUFtQjtJQUNaLDZCQUE2QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNuQyxDQUFDO0lBRU0sd0JBQXdCLENBQUMsMEJBQWtDO1FBQ2pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRywwQkFBMEIsQ0FBQztJQUN6RCxDQUFDO0NBQ0Q7QUFoS0Qsa0NBZ0tDIn0=