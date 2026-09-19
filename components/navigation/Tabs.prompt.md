Switches between sibling views. The active underline is a 1.5px Himalaya rule — never a filled block.

```jsx
<Tabs items={["Overview", "Therapies", "Rooms", "Journal"]} onChange={setView} />
<Tabs variant="pill" items={[{value:"all",label:"All",count:13},{value:"diet",label:"Diet"}]} />
```
