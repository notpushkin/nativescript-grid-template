export default function gridTemplateAreas(template) {
  const rows = template
    .trim()
    .split("\n")
    .map(x => x.trim().split(" "));
  const areas = {};
  for (let row = 0; row < rows.length; row++) {
    const rowAreas = rows[row];
    for (let col = 0; col < rowAreas.length; col++) {
      if (!areas.hasOwnProperty(rowAreas[col])) {
        areas[rowAreas[col]] = { col, row, colSpan: 1, rowSpan: 1 };
      } else {
        if (areas[rowAreas[col]].row === row) {
          areas[rowAreas[col]].colSpan += 1;
        } else {
          areas[rowAreas[col]].rowSpan += 1;
        }
      }
    }
  }

  return areas;
}
