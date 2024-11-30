const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.LocalStorage,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Plugins.NinePatch,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.Dictionary,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Physics,
		C3.Behaviors.Pin,
		C3.Behaviors.Tween,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.NinePatch.Cnds.IsOnLayer,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.NinePatch.Cnds.CompareInstanceVar,
		C3.Plugins.Touch.Cnds.OnNthTouchEnd,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.System.Cnds.PickAll,
		C3.Behaviors.Pin.Cnds.IsPinned,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.DragnDrop.Cnds.IsEnabled,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.IsPreview,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Exps.TouchCount,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Touch.Cnds.OnNthTouchStart,
		C3.Plugins.Sprite.Cnds.PickTopBottom,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.System.Acts.StopLoop,
		C3.Plugins.Sprite.Exps.ZIndex,
		C3.Behaviors.Pin.Acts.Unpin,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.layoutname,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Exps.min,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.Signal,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Dictionary.Exps.Get,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Arr.Exps.Height,
		C3.Plugins.Arr.Exps.Depth,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Dictionary.Cnds.HasKey,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.Arr.Acts.Delete,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Cnds.PickInstVarHiLow,
		C3.Plugins.System.Cnds.PickByEvaluate,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.WaitForSignal,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Exps.rgbex255,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareXY,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Behaviors.Physics.Cnds.IsEnabled,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Text.Cnds.IsOnLayer,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.System.Exps.lowercase,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.LocalStorage.Acts.SetItem
	];
};
self.C3_JsPropNameTable = [
	{Browser: 0},
	{Touch: 0},
	{Mouse: 0},
	{LocalStorage: 0},
	{CardDeck: 0},
	{InitialDeal: 0},
	{UndoArray: 0},
	{ID: 0},
	{MenuText: 0},
	{Layout: 0},
	{Variant: 0},
	{Button: 0},
	{TiledBackground: 0},
	{SettingsButton: 0},
	{SettingsDict: 0},
	{Setting: 0},
	{SelectedSetting: 0},
	{Color: 0},
	{DiscardUID: 0},
	{FoundationUID: 0},
	{Frame: 0},
	{IndexInDiscard: 0},
	{IndexInFoundation: 0},
	{IndexInStock: 0},
	{IndexInTableau: 0},
	{IsMovable: 0},
	{StockUID: 0},
	{Suit: 0},
	{TableauUID: 0},
	{Value: 0},
	{DragDrop: 0},
	{Physics: 0},
	{Pin: 0},
	{Tween: 0},
	{Card: 0},
	{IsValidDrop: 0},
	{NumberOfCards: 0},
	{TopCardValue: 0},
	{Foundation: 0},
	{Column: 0},
	{Row: 0},
	{TopCardColor: 0},
	{TopCardSuit: 0},
	{Tableau: 0},
	{FlipsRemaining: 0},
	{Stock: 0},
	{NumberOfStaggeredCards: 0},
	{Discard: 0},
	{Cell: 0},
	{Name: 0},
	{DebugText: 0},
	{TopBarButton: 0},
	{Drag: 0},
	{WinText: 0},
	{Deck: 0},
	{HasCardOffset: 0},
	{CardScaleModifier: 0},
	{NextFoundationValue: 0},
	{CardUID: 0},
	{CompletedFoundations: 0},
	{IsCancelingMove: 0},
	{CardWidth: 0},
	{CardHeight: 0},
	{CurrentCardFromStackType: 0},
	{CurrentCardFromStackUID: 0},
	{HasBeenDragged: 0},
	{IsGamePaused: 0},
	{PreDragX: 0},
	{PreDragY: 0},
	{MAX_CLICK_TIME: 0},
	{TimeSincePickUp: 0},
	{TWEEN_SPEED: 0},
	{WasHeldTooLongForClick: 0},
	{HasMoved: 0},
	{DraggedCardIndexInTableau: 0},
	{X: 0},
	{Y: 0},
	{CARDS_TRADITIONAL: 0},
	{DEAL_FACE_DOWN: 0},
	{DEAL_LAST_CARD_FACE_UP: 0},
	{FOUNDATIONS_DIRECTION: 0},
	{FOUNDATIONS_INCREMENT_BY: 0},
	{FOUNDATIONS_SUIT_MATCH: 0},
	{FOUNDATIONS_START_WITH: 0},
	{HAS_STOCK: 0},
	{NUMBER_OF_CARDS_PER_SUIT: 0},
	{NUMBER_OF_DECKS: 0},
	{NUMBER_OF_SUITS: 0},
	{STOCK_FLIPS: 0},
	{STOCK_FLIPS_NUMBER_OF_CARDS: 0},
	{TABLEAUS_ALTERNATE_COLOR: 0},
	{TABLEAUS_SAME_SUIT: 0},
	{TABLEAUS_CAN_MOVE_ANY_CARD_TO_EMPTY: 0},
	{TABLEAUS_CAN_MULTI_MOVE: 0},
	{TABLEAUS_CAN_WRAP: 0},
	{TABLEAUS_CAN_MOVE_SPECIFIC_CARD_TO_EMPTY: 0},
	{TABLEAUS_DIRECTION: 0},
	{WIN_MEANS_ALL_CARDS_ON_FOUNDATIONS: 0},
	{TABLEAUS_GRAY_OUT_IMMOVABLE_CARDS: 0},
	{CARD_OFFSET: 0},
	{CARD_SCALE: 0},
	{DECK_ART: 0},
	{DEFAULT_DECK_ART: 0},
	{DISCARD_STAGGER: 0},
	{STOCK_FLIP_TWEEN_TIME: 0},
	{DEBUG_MODE: 0},
	{TABLEAU_HEIGHT_MULTIPLIER: 0},
	{PickIndex: 0},
	{StaggerBy: 0},
	{TableauIID: 0},
	{CardColor: 0},
	{CardSuit: 0},
	{CardValue: 0},
	{TableauTopCardColor: 0},
	{TableauTopCardSuit: 0},
	{TableauTopCardValue: 0},
	{NorthCardColor: 0},
	{NorthCardSuit: 0},
	{NorthCardUID: 0},
	{NorthCardValue: 0},
	{SouthCardColor: 0},
	{SouthCardSuit: 0},
	{SouthCardUID: 0},
	{SouthCardValue: 0},
	{CardIndexInTableau: 0},
	{NumberOfMovesToUndo: 0},
	{CheckingIndexOfUndoArray: 0},
	{TypeOfMove: 0},
	{FromType: 0},
	{FromUID: 0},
	{Pinned: 0},
	{IndexInUndoArray: 0}
];

self.InstanceType = {
	Browser: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	CardDeck: class extends self.IArrayInstance {},
	InitialDeal: class extends self.IArrayInstance {},
	UndoArray: class extends self.IArrayInstance {},
	MenuText: class extends self.ITextInstance {},
	Button: class extends self.IWorldInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	SettingsButton: class extends self.ISpriteInstance {},
	SettingsDict: class extends self.IDictionaryInstance {},
	SelectedSetting: class extends self.ISpriteInstance {},
	Card: class extends self.ISpriteInstance {},
	Foundation: class extends self.ISpriteInstance {},
	Tableau: class extends self.ISpriteInstance {},
	Stock: class extends self.ISpriteInstance {},
	Discard: class extends self.ISpriteInstance {},
	Cell: class extends self.ISpriteInstance {},
	DebugText: class extends self.ITextInstance {},
	TopBarButton: class extends self.ISpriteInstance {},
	Drag: class extends self.ISpriteInstance {},
	WinText: class extends self.ITextInstance {}
}