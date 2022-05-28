export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _atualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._atualDate.getTime();
  }

  get _days() {
    return Math.floor(this._timeStampDiff / (1000 * 60 * 60 * 24));
  }
  get _hours() {
    return Math.floor(this._timeStampDiff / (1000 * 60 * 60));
  }
  get _minutes() {
    return Math.floor(this._timeStampDiff / (1000 * 60));
  }
  get _seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total () {
    const days = this._days;
    const hours = this._hours % 24;
    const minutes = this._minutes % 60;
    const seconds = this._seconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds
    }
    // return `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
  }
}
