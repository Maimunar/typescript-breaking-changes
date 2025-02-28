const AccessibilityModifier = {
  PrivateKeyword: null,
  ProtectedKeyword: null,
  PublicKeyword: null,
};

const ModifierLike = {
  Modifier: {
    ParameterPropertyModifier: {
      AccessibilityModifier, // only in class constructors
      ReadonlyKeyword: null,
    },
    ClassMemberModifier: {
      AccessibilityModifier,
      ReadonlyKeyword: null,
    },
    AbstractKeyword: null, // class, method, property only; cant be used with static; only in abstract class
    AsyncKeyword: null, // function, method only
    DeclareKeyword: null,
    DefaultKeyword: null, // only if exporting
    ExportKeyword: null,
    StaticKeyword: null, // only if class member
  },
  Decorator: null,
};

const Declaration = {
  LetKeyword: null,
  ConstKeyword: null,
  VarKeyword: null,
};
