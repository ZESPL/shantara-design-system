Small olive group labels with their items inline, separated by a middot.

```jsx
<GroupedList columns={2} groups={[{ label: "Water, earth and sun", items: ["Hydrotherapy", "Mud therapy"] }]} />
```

Use when a list has natural groups the reader should scan by. Group labels are content — take them from `content/`, never invent a taxonomy. **Responsive:** groups stack on phones; columns from 760px.
