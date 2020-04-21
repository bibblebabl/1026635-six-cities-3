import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SignIn from './sign-in';

it(`<SignIn /> renders correctly`, () => {
  const onSubmit = jest.fn();

  const component = renderer.create(
      <SignIn
        onSubmit={onSubmit}
      />
  )
  .toJSON();
  expect(component).toMatchSnapshot();
});

