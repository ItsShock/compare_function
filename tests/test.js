const compare = require('..');

describe('Funkcja compare', () => {
  it('powinna zwracać liczbę', async () => {
    const result = compare(1, 1);

    expect(typeof result).toBe('number');
  });

  it('powinna zwracać 1 gdy pierwszy argument jest większy niż drugi', async () => {
    expect(compare(2, 1)).toBe(1);
    expect(compare(-10, -11)).toBe(1);
    expect(compare(-9999, -10000)).toBe(1);
    expect(compare(10001, 10000)).toBe(1);
  });

  it('powinna zwracać -1 gdy pierwszy argument jest mniejszy niż drugi', async () => {
    expect(compare(1, 2)).toBe(-1);
    expect(compare(-10, 0)).toBe(-1);
    expect(compare(-100000, -9999)).toBe(-1);
    expect(compare(10000, 10001)).toBe(-1);
  });

  it('powinna zwracać 0 gdy argumenty są równe', async () => {
    expect(compare(1, 1)).toBe(0);
    expect(compare(-10, -10)).toBe(0);
    expect(compare(-9999, -9999)).toBe(0);
    expect(compare(10000, 10000)).toBe(0);
  });
});
