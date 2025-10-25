const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const currentColour = document.getElementById('current-colour');
const colourVibe = document.getElementById('colour-vibe');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const color = e.target.id;
    body.style.backgroundColor = color;
    currentColour.textContent = `Current Colour: ${color}`;

    // Different shades for container
    let containerShade = '';
    let vibe = '';

    switch (color) {
      case 'grey':
        containerShade = '#b0b0b0';
        vibe = 'Calm and neutral vibes 🧘‍♂️';
        break;
      case 'red':
        containerShade = '#ff6666';
        vibe = 'Bold and energetic! 🔥';
        break;
      case 'blue':
        containerShade = '#66a3ff';
        vibe = 'Cool and peaceful 🌊';
        break;
      case 'pink':
        containerShade = '#ffb6c1';
        vibe = 'Sweet and cheerful 💕';
        break;
      default:
        containerShade = '#ffffff';
        vibe = 'Nice choice!';
    }

    // Change container background
    container.style.backgroundColor = containerShade;
    colourVibe.textContent = vibe;
  });
});
