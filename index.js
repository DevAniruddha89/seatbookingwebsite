const container = document.querySelector('.container')
const seats = document.querrySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


populateUI();

let ticketpdice = +movieSelect.value;

function setMOvieDate(movieIndex, movieprice) {
    localStorage.setIteam('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', movieprice);
}

populateUI();

let ticketPrice = +movieSelect.value;

function setMOvieDate(movieIndex, movieIndex) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMovieIndex', price);
}

function updateSelectedCount() {


    const selectedSeats = docuent.querrySelectorAll('row.seat.selected');
    const seatIndex = [...selectedSeats].map(set => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', Json.stringify(seatsIndex))

    const selectedSeatsCounts = selectedSeatsCount;
    total.innerText = selectedSeatsCounts * ticketPrice;
    setMOvieDate(movieSelect.selectedindex, movieSelect.value);

}


function populationUI() {
    const selectedSeats = Json.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.lenght > 0) {
        seats.forEach(seat, index) => {
            if (selectedSeats.indexof(index) > -1) {
                seats.classList.add('selected');
            }
        };

    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


movieSelect, addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMOvieDate(e.teget.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seats') &&
        !e.target.classList.containes('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});
updateSelectedCount();

