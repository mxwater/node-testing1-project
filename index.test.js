const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {})
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });

  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input); 
  });
});



describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const actual = utils.findLargestInteger(integers);
    expect(actual).toBe(3);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); 
  });

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3); 
  });

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown(); 
    expect(counter.countDown()).toBe(2); 
  });

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown(); // 3 -> 2
    counter.countDown(); // 2 -> 1
    counter.countDown(); // 1 -> 0
    expect(counter.countDown()).toBe(0); // should remain 0
  });
});


describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // fresh seasons object for each test
  });

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer'); // first call returns "summer"
  });

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next(); // move to fall
    expect(seasons.next()).toBe('fall');
  });

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next(); // move to fall
    seasons.next(); // move to winter
    expect(seasons.next()).toBe('winter');
  });

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next(); // fall
    seasons.next(); // winter
    seasons.next(); // spring
    expect(seasons.next()).toBe('spring');
  });

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next(); // fall
    seasons.next(); // winter
    seasons.next(); // spring
    seasons.next(); // back to summer
    expect(seasons.next()).toBe('summer');
  });

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next(); // cycle through 39 times
    }
    expect(seasons.next()).toBe('spring'); // 40th call is spring
  });
});


describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // max tank size = 20 gallons
  });

  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100);
    expect(focus.odometer).toBe(100); 
  });

  test('[16] driving the car uses gas', () => {
    focus.drive(600); 
    expect(focus.tank).toBeLessThan(20);
  });

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600); 
    expect(focus.tank).toBe(0);
    focus.refuel(10); 
    expect(focus.tank).toBe(10); 
    focus.drive(300);
    expect(focus.odometer).toBe(900); 
  });

  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(5);
    expect(focus.tank).toBe(20); 
    focus.drive(600); 
    expect(focus.odometer).toBe(600); 
  });
});
  


describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toBe(true); 
  });

  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3);
    expect(result).toBe(false); 
  });
})