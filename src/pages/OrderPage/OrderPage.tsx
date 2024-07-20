import { useState } from 'react'
import cn from 'classnames';

import DateDayInput from '../../components/OrderInputs/DateDay'
import DateTimeInput from '../../components/OrderInputs/DateTime'
import Dropdown from '../../components/OrderInputs/WeightDropdown'
import Amount from '../../components/OrderInputs/Amount'
import VATDropdown from '../../components/OrderInputs/VATDropdown'
import Cargo from '../../components/OrderInputs/Cargo'
import City from '../../components/OrderInputs/City'
import Address from '../../components/OrderInputs/Address'
import PhoneInput from 'react-phone-input-2'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input';

import { buttonStyle, containerStyle, inputStyle } from '../../components/PhoneInputStyling'

import cargo_icon from '../../assets/icons/Cargo.svg'
import weight_icon from '../../assets/icons/Weight.svg'
import amount_icon from '../../assets/icons/Volume.svg'
import point_icon from '../../assets/icons/Point.svg'
import phone_icon from '../../assets/icons/Phone.svg'
import temp_icon from '../../assets/icons/Temp_regime.svg'
import calendar_icon from '../../assets/icons/Calendar.svg'
import icon from '../../assets/icons/Add_new_order.svg'

import styles from './OrderPage.module.css'
import icon_styles from '../../icon_styles.module.css'
import input_styles from '../../UI/Input/Input.module.css'
import button_styles from '../../UI/Button/Button.module.css'
import amount_styles from '../../components/OrderInputs/Amount.module.css'
import container_styles from '../../UI/containers.module.css'

import { ButtonThemes } from '../../UI/Button/ButtonTypes'
import { InputThemes } from '../../UI/Input/InputTypes';


export default function OrderPage() {
  const [cargoValue, setCargoValue] = useState<string>('');
  const [amountValue, setAmountValue] = useState<string>('');
  const [onLoadingPhoneValue, setOnLoadingPhoneValue] = useState<string>('')
  const [onLoadingValue, setOnLoadingValue] = useState<string>('');
  const [onUnloadingValue, setOnUnloadingValue] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [onLoadingCityValue, setOnLoadingCityValue] = useState<string>('');
  const [onUnloadingCityValue, setUnloadingCityValue] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [weightValue, setWeightValue] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleDropdownChange = (value: string) => {
    setSelectedUnit(value);
  };

  const handleAmountChange = (value: string) => {
    setAmountValue(value);
  }

  const handleOnLoadingCityChange = (value: string) =>{
    setOnLoadingCityValue(value);
  }

  const handleUnloadingCityChange = (value: string) =>{
    setUnloadingCityValue(value);
  }

  const formatOutput = () => {
    if (date && time) {
      return `${date}, ${time}`;
    }
    return date || time || 'Нет данных';
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnLoadingValue(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnUnloadingValue(e.target.value);
  };

  const setWeightNumberValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setWeightValue(newValue);
    }
  };

  const clearLoadingInput = () => {
    setOnLoadingValue('');
  };

  const clearUnloadingInput = () => {
    setOnUnloadingValue('');
  };

  const isDateAndTimeComplete = () => date.length === 10 && time.length === 5;

  return (
      <div className={styles.order_page}>
        <div className={styles.order_block}>
          <div className={styles.order_title}>
            <img src={icon} className={icon_styles.title_icon}/>
            <h2>Оформить заявку</h2>
          </div>
          <div className={styles.order_main}>
            <div className={styles.order_cargo_block}>
              <Cargo
                value={cargoValue}
                onChange={setCargoValue}>
              </Cargo>
              <div className={styles.weight_group_input}>
                <div className={styles.weight_input}>
                  <img
                    src={weight_icon}
                    alt="Вес"
                    className={icon_styles.add_order_icon}/>
                  <input
                    type="text"
                    value={weightValue}
                    onChange={setWeightNumberValue}
                    maxLength={4}
                    className={input_styles.weight_amount_vat_input}
                    placeholder='Вес'/>
                </div>
                <Dropdown
                  id="weight_type"
                  value={selectedUnit}
                  onChange={handleDropdownChange}
                  options={[
                    { label: "кг", value: "кг" },
                    { label: "т", value: "т" },
                  ]}
                />
              </div>
              <Amount
                value={amountValue}
                onChange={handleAmountChange}
              ></Amount>
            </div>

            <div className={cn(container_styles.flex_row, container_styles.gap_10)} style={{ alignItems: 'center' }}>
                <Input
                    inputTheme={InputThemes.RED}
                    autoFocus={false}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name="terms"
                    type="checkbox"
                />
                <div className={styles.order_temp_text}>
                    Температурный режим
                </div>
            </div>
        
            <div className={styles.date_block}>
              <DateDayInput
                value={date}
                onChange={handleDateChange}
              ></DateDayInput>
              <DateTimeInput
                value={time}
                onChange={handleTimeChange}
              ></DateTimeInput>
            </div>
        
            <div className={styles.loading_block}>
              <p>Загрузка</p>
              <div className={styles.place_block}>
                <div className={styles.city_block}>
                  <img src={point_icon} alt="Населённый пункт" className={icon_styles.add_order_icon}/>
                  <City
                    value={onLoadingCityValue}
                    onChange={handleOnLoadingCityChange}/>
                </div>
                <Address
                  id="onLoadingInput"
                  value={onLoadingValue}
                  onChange={handleInputChange1}
                  onClear={clearLoadingInput}
                />
              </div>
              <div className={styles.phone_block}>
                <img src={phone_icon} alt="Телефон" className={icon_styles.add_order_icon}/>
                <div className={styles.phone_input}>
                  <PhoneInput
                    inputClass={input_styles.phone_input}
                    country={'ru'}
                    onlyCountries={['ru']}
                    disableDropdown
                    disableSearchIcon={true}
                    value={onLoadingPhoneValue}
                    onChange={setOnLoadingPhoneValue}
                    countryCodeEditable={false}
                    placeholder={"+7 (999) 999-99-99"}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    inputStyle={inputStyle}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.loading_block}>
              <p>Разгрузка</p>
              <div className={styles.place_block}>
                <div className={styles.city_block}>
                  <img src={point_icon} alt="Населённый пункт" className={icon_styles.title_icon}/>
                  <City
                    value={onUnloadingCityValue}
                    onChange={handleUnloadingCityChange}/>
                </div>
                <Address
                  id="onUnloadingInput"
                  value={onUnloadingValue}
                  onChange={handleInputChange2}
                  onClear={clearUnloadingInput}
                />
              </div>
              <div className={styles.phone_block}>
                <img src={phone_icon} alt="Телефон" className={icon_styles.add_order_icon}/>
                <div className={styles.phone_input}>
                  <PhoneInput
                    inputClass={input_styles.phone_input}
                    country={'ru'}
                    onlyCountries={['ru']}
                    disableDropdown
                    disableSearchIcon={true}
                    countryCodeEditable={false}
                    placeholder={"+7 (999) 999-99-99"}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    inputStyle={inputStyle}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true
                    }}
                  />
                </div>
              </div>
            </div>
            <VATDropdown
              id="vat_type"
              options={[
                { label: "c НДС", value: "с НДС"},
                { label: "без НДС", value: "без НДС"}
              ]}
            />
          </div>
        </div>
        <div className={styles.order_preview_block}>
          <div className={styles.order_preview_group_elements}>

            <div className={styles.order_preview_element}>
              <div className={styles.order_preview_element_title}>
                <p>Груз</p>
              </div>
              <div className={styles.order_preview_element_info}>
                {cargoValue ? <img src={cargo_icon} className={icon_styles.title_icon}></img> : <img src={cargo_icon} className={icon_styles.preview_order_icon}></img>}
                <p style={{ color: cargoValue ? 'black' : 'var(--inactive-text-color)' }}>{cargoValue ? cargoValue : 'Нет данных'}{}</p>
                {isChecked && <img src={temp_icon} alt="Температурный режим" className={icon_styles.title_icon}/>}
              </div>
            </div>

            <div className={styles.order_preview_element}>
              <div className={styles.order_preview_element_title}>
                <p>Вес</p>
              </div>
              <div className={styles.order_preview_element_info}>
                {weightValue && selectedUnit ? <img src={weight_icon} className={icon_styles.title_icon}></img> : <img src={weight_icon} className={icon_styles.preview_order_icon}></img>}
                <p style={{ color: weightValue && selectedUnit ? 'black' : 'var(--inactive-text-color)' }}>
                  {weightValue ? `${weightValue} ${selectedUnit}` : 'Нет данных'}
                </p>
              </div>
            </div>

            <div className={styles.order_preview_element}>
              <div className={styles.order_preview_element_title}>
                <p>Объём</p>
              </div>
              <div className={styles.order_preview_element_info}>
                {amountValue ? <img src={amount_icon} className={icon_styles.title_icon}></img> : <img src={amount_icon} className={icon_styles.preview_order_icon}></img>}
                <p style={{ color: amountValue ? 'black' : 'var(--inactive-text-color)' }}>
                {amountValue ? (<>{amountValue} <span className={amount_styles.amount_value}>м<sup>3</sup></span></>) : ('Нет данных')}
                </p>
              </div>
            </div>

            <div className={styles.order_preview_element}>
              <div className={styles.order_preview_element_title}>
                <p>Когда</p>
              </div>
              <div className={styles.order_preview_element_info}>
                <img
                  src={calendar_icon}
                  className={isDateAndTimeComplete() ? icon_styles.title_icon : icon_styles.preview_order_icon}
                />
                <p style={{ color: isDateAndTimeComplete() ? 'black' : 'var(--inactive-text-color)' }}>
                  {formatOutput()}
                </p>
              </div>
            </div>

            <div className={styles.order_preview_element}>
              <div className={styles.order_preview_element_title}>
                <p>Маршрут</p>
              </div>
              <div className={styles.order_preview_element_info}>
                {onLoadingCityValue && onLoadingValue ? <img src={point_icon} className={icon_styles.add_order_icon}></img> : <img src={point_icon} className={icon_styles.preview_order_icon}></img>}
                <div className={styles.order_preview_element_place}>
                  <p style={{ color: onLoadingCityValue ? 'black' : 'var(--inactive-text-color)' }}>
                    {onLoadingCityValue ? onLoadingCityValue : 'Нет данных'}
                  </p>
                  <p className={styles.order_preview_address_text}>
                    {onLoadingValue ? onLoadingValue : 'Нет данных'}
                  </p>
                </div>
              </div>
              <div className={styles.order_preview_element_info}>
                {onUnloadingCityValue && onUnloadingValue ? <img src={point_icon} className={icon_styles.title_icon}></img> : <img src={point_icon} className={icon_styles.preview_order_icon}></img>}
                <div className={styles.order_preview_element_place}>
                  <p style={{ color: onUnloadingCityValue ? 'black' : 'var(--inactive-text-color)' }}>
                    {onUnloadingCityValue ? onUnloadingCityValue : 'Нет данных'}
                  </p>
                  <p className={styles.order_preview_address_text}>
                    {onUnloadingValue ? onUnloadingValue : 'Нет данных'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button buttonTheme={ButtonThemes.RED_FILLED} className={cn(button_styles.button, button_styles.button_width300px)}>Оформить заявку</Button>
        </div>
      </div>
  )
}
