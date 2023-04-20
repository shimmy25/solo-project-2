import React from 'react';

const SearchForm = () => {
  return (
    <div>
      <form>
        <div>
          <label for="colorMenu">Choose a color: </label>
          <select id="colorMenu">
            <option value="clear">Clear</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
            <option value="gold">Gold</option>
            <option value="yellow">Yellow</option>
            <option value="turquoise">Turquoise</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="white">White</option>
          </select>
        </div>
      </form>

      <br></br>
      <form>
        <div>
          <label for="rockNameMenu">Choose a crystal: </label>
          <select id="rockNameMenu">
            <option value="clearQuartz">Clear Quartz</option>
            <option value="jasper">Japser</option>
            <option value="obsidian">Obsidian</option>
            <option value="amethyst">Amethyst</option>
            <option value="bloodstone">Bloodstone</option>
            <option value="tigersEye">Tiger's Eye</option>
            <option value="citrine">Citrine</option>
            <option value="Turquoise">Turquoise</option>
            <option value="sapphire">Sapphire</option>
            <option value="jade">Jade</option>
            <option value="roseQuartz">Rose Quartz</option>
            <option value="moonstone">Moonstone</option>
            <option value="ruby">Ruby</option>
          </select>
        </div>
      </form>
      <br></br>

      <form>
        <div>
          <label for="qualityMenu">Choose a quality: </label>
          <select id="qualityMenu">
            <option value="balance">Balance</option>
            <option value="nurturing">Nurturing</option>
            <option value="strength">Strength</option>
            <option value="purifying">Purifying</option>
            <option value="empowering">Empowering</option>
            <option value="motivation">Motivation</option>
            <option value="creativity">Creativity</option>
            <option value="rootedness">Rootedness</option>
            <option value="prosperity">Prosperity</option>
            <option value="luck">Luck</option>
            <option value="love">Love</option>
            <option value="growth">Growth</option>
            <option value="sensuality">Sensuality</option>
          </select>
        </div>
      </form>
      <br></br>
      <form>
        <div>
          <label for="opacityMenu">Choose the stone's opacity: </label>
          <select id="opacityMenu">
            <option value="clear">Clear</option>
            <option value="opaque">Opaque</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
