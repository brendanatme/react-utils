# React Utils

Reusable React Components and HOCs

## Usage

### ShowOnMount

```javascript
import ShowOnMount from '@brendanatme/react-utils/components/show-on-mount';

export default () => (
  <div>
    <ShowOnMount
      animInClassName="fadeIn"
      animOutClassName="fadeOut"
      className="fade"
      delay={500}
    >
      Hey.
    </ShowOnMount>
  </div>
);
```

### withOverlay

```javascript
import { withOverlay } from '@brendanatme/react-utils/hocs/with-overlay';

const Component = ({
  overlay,
}) => (
  <div>
    <button onClick={overlay.show}>
      Open Modal
    </button>

    <button onClick={overlay.hide}>
      Close Modal
    </button>

    {overlay.isShowing && (
      <p>This should be an overlay</p>
    )}
  </div>
);

export default withOverlay(Component);
```
