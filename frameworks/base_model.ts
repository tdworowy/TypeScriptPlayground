interface IClikableItem {
    DisplayName: string
    Id: number
   [key:string]: any;
}
let ClikableItemArray: IClikableItem[] = (
    [
        {Id:1, DisplayName: "FirstElement"},
        {Id:2, DisplayName: "SecondElement"},
        {Id:3, DisplayName: "ThirdElement"},
    ]
)

