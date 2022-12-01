'use strict';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';

const sendForm = ({ formId, URL, method = 'POST', someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  statusBlock.style.color = '#000';
  const loadText = '<span>Отправка данных...</span>';
  const errorText = '<span>Ошибка...</span>';
  const successText = '<span>Спасибо!<br>Наш менеджер с Вами свяжется</span>';

  const sendData = (data) => {
    return fetch(URL, {
      method: method,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const dataObj = {};

    statusBlock.innerHTML = loadText;
    if (formId == 'form3') statusBlock.style.color = '#FFF';
    form.append(statusBlock);

    formData.forEach((val, key) => {
      dataObj[key] = val;
    });

    if (!isAlpha(dataObj.name, 'ru-RU', { ignore: ' ' })) {
      statusBlock.innerHTML = '<span>Проверьте Ваше имя...</span>';
      statusBlock.style.color = 'red';
      setTimeout(() => {
        statusBlock.remove();
      }, 10000);
      return;
    }

    if (!isMobilePhone(dataObj.phone)) {
      statusBlock.innerHTML = '<span>Проверьте Ваш номер телефона...</span>';
      statusBlock.style.color = 'red';
      setTimeout(() => {
        statusBlock.remove();
      }, 10000);
      return;
    }

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        dataObj[elem.id] = element.textContent.includes('$')
          ? +element.textContent.split('$')[0]
          : isNaN
          ? +element.textContent
          : element.textContent;
      } else if (elem.type === 'input') {
        dataObj[elem.id] = element.value;
      }
    });

    sendData(dataObj)
      .then((data) => {
        statusBlock.innerHTML = successText;
      })
      .then(() =>
        setTimeout(() => {
          statusBlock.remove();
        }, 10000),
      )
      .catch((err) => {
        statusBlock.innerHTML = errorText;
      })
      .then(() =>
        setTimeout(() => {
          statusBlock.remove();
        }, 10000),
      );
  };

  try {
    if (!form) {
      throw new Error('Put the form back where it belongs, please!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log('Error... : ' + error.message);
  }
};

export default sendForm;
