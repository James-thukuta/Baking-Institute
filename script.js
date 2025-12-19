document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();

  if(!name || !phone){
    alert('Please enter your name and phone number.');
    return;
  }

  const subject = encodeURIComponent(`Booking: ${service} — ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`
  );

  window.location.href =
    `mailto:jamesthukuta49@gmail.com?subject=${subject}&body=${body}`;
});
