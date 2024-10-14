### **4. Customers Feature**
#### Purpose:
Manages customer selection, searching, and adding notes for customers.

#### Components:
- **CustomerSearch.tsx**: Provides input fields for searching customers.
- **CustomerSelect.tsx**: Displays a customer selector component.
- **CustomerNote.tsx**: Allows adding or editing notes for a customer.

#### Containers:
- **CustomerSearchContainer.tsx**: Handles customer search logic (input validation, API calls).
- **CustomerSelectContainer.tsx**: Handles customer selection from search results.
- **CustomerNoteContainer.tsx**: Manages the logic for adding customer-specific notes.

#### Redux:
- **customersSlice.ts**:
  - Actions: `searchCustomer`, `selectCustomer`, `addCustomerNote`.
  - State: `customerList[]`, `selectedCustomer`, `customerNotes`.
  - Reducers for updating customer state.

#### Services:
- **customerServices.ts**: Handles API calls related to customer search and notes.

#### Step-by-Step:
1. Create **CustomerSearch**, **CustomerSelect**, and **CustomerNote** UI components.
2. Write containers for **business logic** related to customers.
3. Define **customersSlice** for state management.
4. Integrate **services** to fetch customer data and persist customer notes.

---
