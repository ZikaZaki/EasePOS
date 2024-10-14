
### **3. Order Summary (Order Total) Feature**
#### Purpose:
Displays the order summary, including the total amount, subtotal, tax, and discounts.

#### Components:
- **OrderSummary.tsx**: Displays order totals (subtotal, discounts, taxes, total).

#### Containers:
- **OrderSummaryContainer.tsx**: Handles the logic for calculating totals and passing them to the `OrderSummary` component.
  - Fetches cart data and applies calculations (subtotal, tax, etc.).

#### Redux:
- **orderSummarySlice.ts**:
  - Actions: `calculateTotal`, `applyDiscount`, `updateTax`.
  - State: `subtotal`, `discounts`, `tax`, `totalAmount`.
  - Reducers for calculating order totals based on cart items.

#### Services:
- **orderSummaryServices.ts**: Handles external calculations for complex tax/discount systems if required.

#### Step-by-Step:
1. Implement **OrderSummary** component for the UI.
2. Write **OrderSummaryContainer** to handle subtotal and total calculations.
3. Implement Redux logic in **orderSummarySlice**.
4. Add tests for **calculation accuracy**.

---
