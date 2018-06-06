import React from 'react';
import { translate } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderPassword from '../../_forms/RenderPassword';

const InitSignUpForm = (props) => {
  const {
    t,
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={RenderInput}
        large
        placeholder={t('signUp.form.initSignUp.email')}
        validate={emailValidate}/>

      <Field
        name="password"
        component={RenderPassword}
        large
        placeholder={t('signUp.form.initSignUp.password')}
        validate={passwordValidate}
        tip={t('signUp.form.initSignUp.passwordTip')}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text={t('signUp.form.initSignUp.submit')}
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};


const FormComponent = reduxForm({
  form: 'initSignUp',
  initialValues: {
    email: '',
    password: '',
    agreeTos: true
  }
})(InitSignUpForm);
const TranslatedComponent = translate('auth')(FormComponent);
export default TranslatedComponent;
