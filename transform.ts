export default function transform(css) {
    css.walkRules((rule) => {
      // Custom transformation logic
      console.log(rule.selector);
    });
  }
  