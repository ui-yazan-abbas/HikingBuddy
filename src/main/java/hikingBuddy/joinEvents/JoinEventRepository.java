package hikingBuddy.joinEvents;

import hikingBuddy.joinEvents.JoinEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinEventRepository extends JpaRepository<JoinEvent, Long> {
}